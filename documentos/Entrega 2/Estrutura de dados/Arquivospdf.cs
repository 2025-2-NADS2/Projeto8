using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EDDS.cs
{
   public class Arquivospdf
    {
        private int id;
        private string nome;

        public Arquivospdf()
        {
            id = 0;
            nome = "nulo";
        }
        public int Getid()
        {
            return this.id;
        }
        public void Setid(int novoid)
        {
            this.id = novoid;
        }
        public string Getstring()
        {
            return this.nome;
        }
        public void Setnome(string novonome)
        {
            this.nome = novonome;
        }
       public bool Maior(Arquivospdf pdf)
        {
            return this.id > pdf.id;
        }
    }
}
