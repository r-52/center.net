namespace HumanCenterNet.Infrastructure.Persistence;

public class BaseDbContext : ApiAuthorizationDbContext<ApplicationUser>, IBaseDbContext
{
    protected readonly IMediator _mediator;
    protected readonly AuditableEntitySaveChangesInterceptor _auditableEntitySaveChangesInterceptor;

    protected readonly ISqliteDatabaseFilePathService _sqliteFilePathService;

    public BaseDbContext(
        DbContextOptions<ApplicationDbContext> options,
        IOptions<OperationalStoreOptions> operationalStoreOptions,
        ISqliteDatabaseFilePathService filePathService,
        IMediator mediator,
        AuditableEntitySaveChangesInterceptor auditableEntitySaveChangesInterceptor)
        : base(options, operationalStoreOptions)
    {
        _mediator = mediator;
        _sqliteFilePathService = filePathService;
        _auditableEntitySaveChangesInterceptor = auditableEntitySaveChangesInterceptor;
    }

    protected override void OnModelCreating(ModelBuilder builder)
    {
        builder.ApplyConfigurationsFromAssembly(Assembly.GetExecutingAssembly());

        base.OnModelCreating(builder);
    }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        optionsBuilder.AddInterceptors(_auditableEntitySaveChangesInterceptor);
        optionsBuilder.UseSqlite($"Data Source={this._sqliteFilePathService.GetFilePathForSqliteDatabase()}");
    }

    public override async Task<int> SaveChangesAsync(CancellationToken cancellationToken = default)
    {
        await _mediator.DispatchDomainEvents(this);

        return await base.SaveChangesAsync(cancellationToken);
    }
}
