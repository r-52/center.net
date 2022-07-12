namespace HumanCenterNet.WebUI.Controllers;

using HumanCenterNet.Infrastructure.Identity;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

public abstract class ApiAuthorizeClass : ApiControllerV1Base
{
    protected ApiAuthorizeClass(ILogger logger, UserManager<ApplicationUser> userManager) : base(logger, userManager)
    {
    }
}
