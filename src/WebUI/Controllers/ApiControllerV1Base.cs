namespace HumanCenterNet.WebUI.Controllers;


[ApiController]
[Route("api/v1/[controller]")]
public abstract class ApiControllerV1Base : ControllerBase {

    protected ILogger _logger;

    public ApiControllerV1Base(ILogger logger)
    {
        _logger = logger;
    }
}
