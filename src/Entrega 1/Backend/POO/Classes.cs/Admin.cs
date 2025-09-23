using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MeuProjeto_alma
{

    public class Admin
    {
        private int id;
        private string nome;
        private string email;
        private int senha;
        //gets e sets do admin
    public int GetId()
        {
            return id;
        }
        public void SetId(int NovoId)
        {
            id = NovoId;
        }
        public string GetNome()
        {
            return nome;
        }
        public void SetNome(string NovoNome)
        {
            nome = NovoNome;
        }
        public string GetEmail()
        {
            return email;
        }
        public void SetEmail(string NovoEmail)
        {
            email = NovoEmail;
        }
        public int GetSenha()
        {
            return senha;
        }
        public void SetSenha(int NovoSenha)
        {
            senha = NovoSenha;
        }
        public void mostrar_info()
        {
            Console.WriteLine($"ID: " + id);
            Console.WriteLine($"nome: " + nome);
            Console.WriteLine($"e-mail: " + email);
        }
    }
}
