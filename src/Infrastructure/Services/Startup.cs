
namespace HumanCenterNet.Infrastructure.Services;

internal static class Startup {
    internal static IServiceCollection AddInfrastructureServices(this IServiceCollection services) {
        services.AddTransient<IDateTime, DateTimeService>();
        services.AddTransient<IIdentityService, IdentityService>();
        services.AddTransient<ICsvFileBuilder, CsvFileBuilder>();
        services.AddTransient<ISqliteDatabaseFilePathService, SqliteDatabaseFilePathService>();
        return services;
    }
}
