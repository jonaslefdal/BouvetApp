using BouvetApp.Entities;

namespace BouvetApp.Repositories
{
    public interface IApiRepository
    {
        void Upsert(API api);
        API Get(int apiId);
        List<API> GetAll();
        
    }
}
