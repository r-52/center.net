using HumanCenterNet.Application.WeatherForecasts.Queries.GetWeatherForecasts;
using Microsoft.AspNetCore.Mvc;

namespace HumanCenterNet.WebUI.Controllers;

public class WeatherForecastController : ApiControllerBase
{
    public WeatherForecastController(ILogger logger) : base(logger)
    {
    }

    [HttpGet]
    public async Task<IEnumerable<WeatherForecast>> Get()
    {
        return await Mediator.Send(new GetWeatherForecastsQuery());
    }
}
