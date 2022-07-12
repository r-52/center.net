using HumanCenterNet.Infrastructure.Identity;
using Microsoft.AspNetCore.Identity;

namespace HumanCenterNet.WebUI.Controllers;


public class ProjectController : ApiAuthorizeClass
{
    public ProjectController(ILogger logger, UserManager<ApplicationUser> userManager) : base(logger, userManager)
    {
    }
}
