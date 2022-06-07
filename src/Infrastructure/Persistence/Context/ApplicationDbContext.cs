using Microsoft.Extensions.Configuration;

namespace HumanCenterNet.Infrastructure.Persistence;

public class ApplicationDbContext : BaseDbContext, IApplicationDbContext
{
    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options, IConfiguration configuration, IOptions<OperationalStoreOptions> operationalStoreOptions, IMediator mediator, AuditableEntitySaveChangesInterceptor auditableEntitySaveChangesInterceptor) : base(options, configuration, operationalStoreOptions, mediator, auditableEntitySaveChangesInterceptor)
    {
    }

    public DbSet<TodoList> TodoLists => Set<TodoList>();

    public DbSet<TodoItem> TodoItems => Set<TodoItem>();

}
