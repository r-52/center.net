namespace Domain.UnitTests;


public class HumanTimeParserTest
{
    [Fact]
    public async void TestHumanTimeParserWithValidInput()
    {
        HumanTimeParser humanTimeParser = new();
        var res = await humanTimeParser.Parse("8h", HumanTimeParserOptions.DecimalHourSeperatorDot);
        Assert.NotNull(res);
        Assert.NotEmpty(res);
        Assert.Equal(res.FirstOrDefault().Value, 8);
    }

    public async void TestHumanTimeParserWithDecimalInput()
    {
        HumanTimeParser humanTimeParser = new();

        await Assert.ThrowsAnyAsync<Exception>(async () =>
        {
            await humanTimeParser.Parse("8,5h", HumanTimeParserOptions.DecimalHourSeperatorDot);
        });
    }
}
