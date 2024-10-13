import './index.scss'
import { useState } from 'react';
import './App.scss';
import axios from "axios";

export default function app() {
    alert('ta funcionando :/')
}

return (

    <div className='Mãe-supreme'>
        <header className='cabeçalho'>
            <img src="" alt="" />

            <a href="">Artigos</a>
            <a href="">Inicio</a>
            <a href="">Sobre</a>

            <button>Login</button>
        </header>

        <div className='titulo1'>
            <h1>Bem-Vindo!</h1>
            <h2>A Nutri Life está pronta para atender você!</h2>
        </div>

        <section className='titulo2'>
            <h1>A NUTRI LIFE</h1>

            <div className='Cards'>
                <div>
                    <p>Ajuadará você a tornar seu estilo de vida mais saudável</p>
                </div>

                <div>
                    <p>Você terá acesso a artigos para entender melhor sobre principais assuntos sobre nutrição</p>
                </div>

                <div>
                    <p>Aumento de enrgia e vitalidade tornando sua vida mais longa</p>
                </div>

                <div>
                    <p>Consultas e exames pensados em se bem-estar por um preço acessível</p>
                </div>
            </div>


        </section>

        <section className='secao2'>
            <h1>Transforme Sua Vida com uma Nutrição Saudável </h1>
            <p>Agende sua consulta, exames, obtenha seus resultados e seja acompanhado em sua dieta personalizada </p>
            <p>Acompanhe relatórios, com recomendações e sugestões</p>

            <a href="">Agendar Consulta</a>

        </section>

        <section className='secao3'>
            <img src="" alt="" />

            <div className='texto1'>
                <h1>Um pouco sobre mim</h1>

                <p>   Sou nutricionista formada pela Universidade de Harvard e mestre em Nutrição Esportiva pela Universidade de Oxford. Durante meus estudos, aprofundei meu conhecimento em nutrição clínica e esportiva, com foco em dietas personalizadas e desempenho atlético. Continuo me atualizando constantemente para oferecer o melhor suporte a meus clientes na busca por saúde e bem-estar.</p>
            </div>
        </section>

        <section className='secao4'>
            <img src="" alt="" />

            <div className='texto2'>
                <h1>Obstenha o livro escrito por Cristina Miranda</h1>
                <p>Baseado em Trabalho de Conclusão de Curso, editado e melhorado, Cristina Miranda disserta sobre o problema causado pelas redes sociais em relação as redes sociais, com suas dietas mirabolantes sem entender os conceitos base da nutrição. </p>

                <a href="">Obter Ebook</a>
            </div>

            <section className='secao5'>
                <h1>duvidas frequentes</h1>

                <div className='caixa-duvidas'>
                    <div>
                        <h3>Lorem ipsum?</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae odio ipsam quo architecto officiis autem adipisci? Impedit enim ab, ratione exercitationem, itaque quod quo adipisci tenetur error at, sequi deserunt.</p>
                    </div>
                    
                    <div>
                        <h3>Lorem ipsum?</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae odio ipsam quo architecto officiis autem adipisci? Impedit enim ab, ratione exercitationem, itaque quod quo adipisci tenetur error at, sequi deserunt.</p>
                    </div>

                    <div>
                        <h3>Lorem ipsum?</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae odio ipsam quo architecto officiis autem adipisci? Impedit enim ab, ratione exercitationem, itaque quod quo adipisci tenetur error at, sequi deserunt.</p>
                    </div>

                </div>
            </section>
        </section>

    </div>
)