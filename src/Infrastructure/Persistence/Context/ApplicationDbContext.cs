namespace HumanCenterNet.Infrastructure.Persistence;

public class ApplicationDbContext : BaseDbContext, IApplicationDbContext
{
    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options, IOptions<OperationalStoreOptions> operationalStoreOptions, ISqliteDatabaseFilePathService filePathService, IMediator mediator, AuditableEntitySaveChangesInterceptor auditableEntitySaveChangesInterceptor) : base(options, operationalStoreOptions, filePathService, mediator, auditableEntitySaveChangesInterceptor)
    {
    }

    public DbSet<TodoList> TodoLists => Set<TodoList>();

    public DbSet<TodoItem> TodoItems => Set<TodoItem>();

}
