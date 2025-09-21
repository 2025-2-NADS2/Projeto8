namespace EDDS.cs
{
    public class TipoAtv
    {
        private int id;
        private string nome;

        public int GetId()
        {
            return id;
        }

        public void SetId(int novoId)
        {
            id = novoId;
        }

        public string GetNome()
        {
            return nome;
        }

        public void SetNome(string novoNome)
        {
            nome = novoNome;
        }
    }
}
