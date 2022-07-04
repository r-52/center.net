namespace HumanCenterNet.Domain.Db;


public class SlugGenerator : ISlugGenerator
{
    public async Task<Slug> GenerateAsync(int length = 32)
    {
        var nanoId = await Nanoid.Nanoid.GenerateAsync(size: length);
        var thisYearTicks = new DateTime(2022, 1, 1).Ticks;
        var diff = DateTime.Now.Ticks - thisYearTicks;

        string res = $"{nanoId}-{String.Join(String.Empty, diff.ToString("x").Take(4))}";
        return new Slug
        {
            Identifier = res
        };
    }
}
