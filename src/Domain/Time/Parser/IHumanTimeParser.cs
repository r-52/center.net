namespace HumanCenterNet.Domain.Time.Parser;



public interface IHumanTimeParser
{
    public Task Parse(string input, HumanTimeParserOptions options);
}
