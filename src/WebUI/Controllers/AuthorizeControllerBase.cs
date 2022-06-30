namespace HumanCenterNet.WebUI.Controllers;

using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

public abstract class ApiAuthorizeClass : ApiControllerV1Base
{
    protected ApiAuthorizeClass(ILogger logger) : base(logger)
    {
    }
}
