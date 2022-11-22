// Criação do componente (componente pai)
Vue.component('blog-post', {
    props: ['post'],
    template: `
        <div>
            <h3>{{ post.title }}</h3>
            <button v-on:click="$emit('enlarge-text', 0.1)">
                Aumentar fonte
            </button>
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
        ],
        postFontSize: 1
    },
    methods:{
        onEnlargeText: function(enlargeAmount){
            this.postFontSize += enlargeAmount
        }
    }
})

