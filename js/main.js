const emails = new Vue({

    el: '.emails',
    data: {
        apiURL: 'https://flynn.boolean.careers/exercises/api/random/mail',
        emails: [],
        randomEmail: '',
        max: 10,
    },

    computed: {
        listOk(){
            return (this.emails.length == this.max) ? true : false;
        },
    },

    created() {
        this.creatList();
    },

    methods: {
        creatList(){
            
            for(let i = 0; i < this.max; i++){
                axios.get(this.apiURL).then(ele => {
                    // handle success
                 
                    this.randomEmail = ele.data.response;
                    if(!this.emails.includes(this.randomEmail)){
                        this.emails.push(this.randomEmail)
                    }
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                  })
            }
            console.log(this.emails);
            
        }
    }
});