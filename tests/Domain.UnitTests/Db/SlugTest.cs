namespace Domain.UnitTests;


public class SlugTest
{
    [Fact]
    public async void TestSlugGeneratorWithDefaultLength()
    {
        var x = new SlugGenerator();
        var slug = await x.GenerateAsync(25);
        Assert.NotNull(slug);
        Assert.NotEqual(slug.Identifier.Length, 25);
        Assert.True(slug.Identifier.Length > 25);
    }

    [Fact]
    public async void TestSlugGeneratorWithCustomLength()
    {
        var x = new SlugGenerator();
        var slug = await x.GenerateAsync();
        Assert.NotNull(slug);
        Assert.NotEqual(slug.Identifier.Length, 32);
        Assert.True(slug.Identifier.Length > 32);
    }

    [Fact]
    public async void TestNegativeSlugIndex()
    {
        var x = new SlugGenerator();
        await Assert.ThrowsAsync<Exception>(async () =>
        {
            var slug = await x.GenerateAsync(-1);
        });

    }
}
