using HumanCenterNet.Application.WeatherForecasts.Queries.GetWeatherForecasts;
using HumanCenterNet.Infrastructure.Identity;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace HumanCenterNet.WebUI.Controllers;

public class WeatherForecastController : ApiControllerBase
{
    public WeatherForecastController(ILogger logger, UserManager<ApplicationUser> userManager) : base(logger, userManager)
    {
    }

    [HttpGet]
    public async Task<IEnumerable<WeatherForecast>> Get()
    {
        return await Mediator.Send(new GetWeatherForecastsQuery());
    }
}
