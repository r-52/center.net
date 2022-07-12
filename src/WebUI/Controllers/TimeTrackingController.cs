using HumanCenterNet.Infrastructure.Identity;
using Microsoft.AspNetCore.Identity;

namespace HumanCenterNet.WebUI.Controllers;


public class TimeTrackingController : ApiAuthorizeClass
{
    public TimeTrackingController(ILogger logger, UserManager<ApplicationUser> userManager) : base(logger, userManager)
    {
    }

    [HttpGet("[action]")]
    public async Task GetTimes() { }

    [HttpPatch("[action]")]
    public async Task UpdateTime() { }

    [HttpPost("[action]")]
    public async Task CreateTime() { }

    [HttpGet("[action]")]
    public async Task GetTimeById() { }

    [HttpDelete("[action]")]
    public async Task DeleteTimeById() { }
}
