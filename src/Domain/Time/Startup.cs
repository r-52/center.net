namespace Microsoft.Extensions.DependencyInjection;


public static class TimeServices
{

    public static IServiceCollection AddTimeServices(this IServiceCollection services)
    {
        services.AddTransient<IHumanTimeParser, HumanTimeParser>();
        return services;
    }
}
