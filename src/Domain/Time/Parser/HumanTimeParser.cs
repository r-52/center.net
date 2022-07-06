namespace HumanCenterNet.Domain.Time.Parser;


public class HumanTimeParser : IHumanTimeParser
{
    public Task Parse(string input, HumanTimeParserOptions options)
    {
        if (string.IsNullOrEmpty(input) || string.IsNullOrWhiteSpace(input))
        {
            throw new ArgumentException("missing input");
        }

        var parseText = input.Trim();

        var isAlreadyDecimalMatched = false;
        for (int x = 0; x < parseText.Length; x++)
        {
            char c = parseText[x];

            string regExp = options switch
            {
                HumanTimeParserOptions.DecimalHourSeperatorComma => @"\,",
                HumanTimeParserOptions.DecimalHourSeperatorDot => @"\.",
                HumanTimeParserOptions.DecimalHourSeperatorCommaOrDot => @"\,|\.",
            };

            var isDecimal = Regex.IsMatch(c.ToString(), regExp);
            if (isDecimal && !isAlreadyDecimalMatched)
            {
                isAlreadyDecimalMatched = true;
            }
            else if (isAlreadyDecimalMatched)
            {
                throw new ArgumentException("wrong decimal handling. multiple seperators detected");
            }
        }

        return Task.FromResult("");
    }
}
