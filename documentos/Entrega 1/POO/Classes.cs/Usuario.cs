using System;
using System.ComponentModel;
using System.Reflection.Metadata;
using System.Runtime.InteropServices;

namespace MeuProjeto_alma
{
    public class Usuario
    {
        public bool IsAdm;
        private int id;
        private string nome;
        private string email;
        private int senha;

        public String GetNome()
        {
            return nome;
        }
        public void SetNome(String NovoNome)
        {
            nome = NovoNome;
        }
        public String GetEmail()
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
        public void SetSenha(int NovaSenha)
        {
            senha = NovaSenha;
        }
        public int GetId()
        {
            return id;
        }
        public void SetId(int NovoId)
        {
            id = NovoId;
        }
        public bool GetIsAdm()
        {
            return IsAdm;
        }
        public void SetIsAdm(bool NovoIsAdm)
        {
            IsAdm = NovoIsAdm;
        }
    }
}