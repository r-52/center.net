using System.Security.Claims;
using HumanCenterNet.Infrastructure.Identity;
using Microsoft.AspNetCore.Identity;

namespace HumanCenterNet.WebUI.Controllers;


[ApiController]
[Route("api/v1/[controller]")]
public abstract class ApiControllerV1Base : ControllerBase {

    protected ILogger _logger;

    protected readonly UserManager<ApplicationUser> _userManager;


    public ApiControllerV1Base(ILogger logger, UserManager<ApplicationUser> userManager)
    {
        _logger = logger;
        _userManager = userManager;
    }

    protected ClaimsPrincipal GetUser() {
        return this.User;
    }

    protected async Task<ApplicationUser> GetDbUser() {
        var fullUser =  await _userManager.GetUserAsync(GetUser());
        return fullUser;
    }
}
