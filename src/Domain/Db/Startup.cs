namespace Microsoft.Extensions.DependencyInjection;


public static class DbServices
{
    public static IServiceCollection AddDbServices(this IServiceCollection services)
    {
        services.AddTransient<ISlugGenerator, SlugGenerator>();
        return services;
    }
}
