namespace Microsoft.Extensions.DependencyInjection;


public static class DomainServices
{
    public static IServiceCollection AddDomainServices(this IServiceCollection services)
    {
        services.AddDbServices();
        return services;
    }
}
