using MediatR;

using Microsoft.AspNetCore.Mvc;

namespace HumanCenterNet.WebUI.Controllers;


public abstract class ApiControllerBase : ApiControllerV1Base
{
    private ISender _mediator = null!;

    protected ApiControllerBase(ILogger logger) : base(logger)
    {
    }

    protected ISender Mediator => _mediator ??= HttpContext.RequestServices.GetRequiredService<ISender>();
}
