using HumanCenterNet.Infrastructure.Identity;
using MediatR;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace HumanCenterNet.WebUI.Controllers;


public abstract class ApiControllerBase : ApiControllerV1Base
{
    private ISender _mediator = null!;

    protected ApiControllerBase(ILogger logger, UserManager<ApplicationUser> userManager) : base(logger, userManager)
    {
    }

    protected ISender Mediator => _mediator ??= HttpContext.RequestServices.GetRequiredService<ISender>();
}
