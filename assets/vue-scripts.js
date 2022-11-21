// Criação do componente
Vue.component('blog-post', {
    props: ['post'],
    template: `
        <div>
            <h3>{{ post.title }}</h3>
            <div v-html="post.content"></div>
        </div>
    `
})

// Instãncia Vue
new Vue({
    el: '#my-blog-post-demo',
    data: {
        posts: [
            { id: 1, title: 'Introdução ao Vue', content: '<p>Texto de introdução ao Vue.</p>' },
            { id: 2, title: 'Criação de instãncias', content: '<p>Texto de criação de instãncias.</p>' },
            { id: 3, title: 'Ciclo de vida das instãncias', content: '<p>Texto do ciclo de vida das instãncias.</p>' }
        ]
    }
})

