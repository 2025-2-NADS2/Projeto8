using System;
using System.IO;


namespace EDDS.cs
{
    class Atividade
    {
        
        private int id;
        private string nome;
        private DateTime data;
        private string tipo_mine;
        private string imagem;
        private double tamanho;
        private TipoAtv[] tAtv;
        private int quantidade_atv;

        public Atividade()
        {
            tAtv = new TipoAtv[5];

            tAtv[0] = new TipoAtv();
            tAtv[0].SetId(1);
            tAtv[0].SetNome("**Grupo de mães**");

            tAtv[1] = new TipoAtv();
            tAtv[1].SetId(2);
            tAtv[1].SetNome("**distribuição de sopa**");

            tAtv[2] = new TipoAtv();
            tAtv[2].SetId(3);
            tAtv[2].SetNome("**entregas de cesta básica**");

            tAtv[3] = new TipoAtv();
            tAtv[3].SetId(4);
            tAtv[3].SetNome("**parceria com posto de saúde**");

            tAtv[4] = new TipoAtv();
            tAtv[4].SetId(4);
            tAtv[4].SetNome("**natal de amor**");

            quantidade_atv = tAtv.Length;
        }
        public string GetNome() 
        { 
            return nome;
        }
        public void SetNome(string NovoNome)
        {
            nome = NovoNome;
        }

        public DateTime GetData() 
        { 
            return data; 
        }
        public void SetData (DateTime Novodata) 
        { 
            data = Novodata; 
        }

        public string GetTipo_mine() 
        {
            return tipo_mine; 
        }
        public void SetTipo_mine(string NovoTipo_mine) 
        {
            tipo_mine = NovoTipo_mine;
        }

        public double GetTamanho() 
        { 
            return tamanho; 
        }
        public void SetTamanho(double NovoTamanho) 
        { 
            tamanho = NovoTamanho; 
        }

        public string GetImagem() 
        {
            return imagem; 
        }
        public void SetImagem(string NovaImagem)
        {
            imagem = NovaImagem;
        }

        public int GetId() 
        { 
            return id;
        }
        public void SetId(int novoId)
        { 
            id = novoId;
        }

        public TipoAtv[] GetTiposAtividade()
        {
            return tAtv;
        }

        public int GetQuantidadeAtividades()
        {
            return quantidade_atv;
        }
        public void EnviarPDF(string caminho_arquivo)
        {
            if (!File.Exists(caminho_arquivo))
            {
                Console.WriteLine("Erro: arquivo não encontrado");
                return;
            }

            this.nome = Path.GetFileName(caminho_arquivo);
            this.tamanho = new FileInfo(caminho_arquivo).Length / 1024.0;
            this.tipo_mine = "application/pdf";
            this.data = DateTime.Now;
            this.id = id;
        }
        public void bubble_Sort()
        {
            int i, y;
            TipoAtv aux;
            int a = quantidade_atv;

            for (i = a - 1; i > 0; i--)
            {
                for (y = 0; y > 1; i++)
                {
                    if (tAtv[a].maior(tAtv[y + 1]))
                    {
                        aux = tAtv[y];
                        tAtv[y] = tAtv[y + 1];
                        tAtv[y + 1] = aux;
                    }
                }
            }
        }
    }
}
