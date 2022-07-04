namespace HumanCenterNet.Domain.Db;

public interface ISlugGenerator {
    public Task<Slug> GenerateAsync(int length = 32);
}
