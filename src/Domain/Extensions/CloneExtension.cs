namespace HumanCenterNet.Domain.Extensions;

using System.Text.Json;


public static class CloneExtension
{
    public static T Clone<T>(this T source)
    {
        var serialized = JsonSerializer.Serialize(source);
        return JsonSerializer.Deserialize<T>(serialized);
    }
}
