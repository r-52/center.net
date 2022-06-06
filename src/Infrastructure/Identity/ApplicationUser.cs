namespace HumanCenterNet.Infrastructure.Identity;

public class ApplicationUser : IdentityUser
{
    public string? FirstName { get; set; } = default!;
    public string? LastName { get; set; } = default!;
    public string? ImageUrl { get; set; } = default!;
    public string? Description { get; set; } = default!;
    public DateTime? LastActiveAt { get; set; }
    public bool IsActive { get; set; } = false;
    public string? RefreshToken { get; set; }
    public DateTime RefreshTokenExpiryTime { get; set; }
    public string Slug { get; set; } = default!;
}
