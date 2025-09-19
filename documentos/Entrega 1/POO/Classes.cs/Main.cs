using MeuProjeto_alma;

class Program
{
    static void Main(string[] args)
    {
        Admin admin1 = new Admin();
        Usuario user1 = new Usuario();
        Console.WriteLine("digite sua senha");
        //entrada de admin//
        int senhaadmin = Convert.ToInt32(Console.ReadLine());
        int senhacorreta = 040604;

        if (senhaadmin == senhacorreta)
        {
            Console.WriteLine("senha correta");
        }
        else
        {
            Console.WriteLine("senha incorreta");
        }
        admin1.SetId(1);
        admin1.SetNome("Samuel Coronel");
        admin1.SetEmail("samuel@email.com");
        admin1.SetSenha(Convert.ToInt32("1234")); 
        admin1.mostrar_info();


        user1.SetNome("Maria");
        user1.SetEmail("maria@email.com");
    }
}