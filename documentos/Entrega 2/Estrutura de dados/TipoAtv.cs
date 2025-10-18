namespace EDDS.cs
{
    public class TipoAtv
    {
        public TipoAtv()
        {
            id = 0;
            nome = "nenhum";
        }
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

        public bool Maior(Arquivospdf pdf)
        {
            return this.id > pdf.Getid();
        }
        public void SetNome(string novoNome)
        {
            nome = novoNome;
        }
        
        public bool maior(TipoAtv atv)
        {
            return this.id > atv.id;
        }
    }
}