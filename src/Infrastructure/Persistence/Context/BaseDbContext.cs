using Microsoft.Extensions.Configuration;

namespace HumanCenterNet.Infrastructure.Persistence;

public class BaseDbContext : ApiAuthorizationDbContext<ApplicationUser>, IBaseDbContext
{
    protected readonly IMediator _mediator;
    protected readonly AuditableEntitySaveChangesInterceptor _auditableEntitySaveChangesInterceptor;


    protected readonly IConfiguration _configuration;

    public BaseDbContext(
        DbContextOptions<ApplicationDbContext> options,
        IConfiguration configuration,
        IOptions<OperationalStoreOptions> operationalStoreOptions,
        IMediator mediator,
        AuditableEntitySaveChangesInterceptor auditableEntitySaveChangesInterceptor)
        : base(options, operationalStoreOptions)
    {
        _mediator = mediator;
        _configuration = configuration;
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
#if DEBUG
        optionsBuilder.EnableSensitiveDataLogging(true);
        optionsBuilder.EnableDetailedErrors(true);
#endif
        var connectionString = _configuration.GetConnectionString("Sqlite");
        optionsBuilder.UseSqlite(connectionString);
    }

    public override async Task<int> SaveChangesAsync(CancellationToken cancellationToken = default)
    {
        await _mediator.DispatchDomainEvents(this);

        return await base.SaveChangesAsync(cancellationToken);
    }
}
