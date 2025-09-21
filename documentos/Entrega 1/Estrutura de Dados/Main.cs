
namespace EDDS.cs
{
    class Program
    {
        public static void Main(string[] args)
        {
            Console.WriteLine("Iniciando o programa...");

            Atividade minhaAtividade = new Atividade();


            minhaAtividade.SetNome("Entrega de Relatório");
            minhaAtividade.SetData(DateTime.Now);

            Console.WriteLine($"Nome inicial da atividade: {minhaAtividade.GetNome()}");
            Console.WriteLine($"Data: {minhaAtividade.GetData()}");


        }
    }
}