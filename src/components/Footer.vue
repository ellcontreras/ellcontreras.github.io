<template lang="pug">
    .bg-gray-700.p-12.text-white.flex
        div(class="w-1/3").flex
            img(src="@/assets/maps-and-flags.svg").w-12
            span.py-16 Guanajuato, México.
        div(class="w-1/3")
            h2.text-center.text-4xl Contreras
            p(class="hover:text-gray-500")
                a(href="https://github.com/Obsinqsob01/")
                    fa-icon(:icon="['fab', 'github']")
                    span.ml-2 GitHub
            p(class="hover:text-gray-500")
                a(href="https://githubcampus.expert/Obsinqsob01/")
                    fa-icon(:icon="['fab', 'github-alt']")
                    span.ml-2 Github Campus Expert
            p(class="hover:text-gray-500")
                a(href="https://www.instagram.com/luisguerra495/")
                    fa-icon(:icon="['fab', 'instagram']")
                    span.ml-2 Instagram
            p(class="hover:text-gray-500")
                a(href="https://twitter.com/ellcontreras/")
                    fa-icon(:icon="['fab', 'twitter']")
                    span.ml-2 Twitter
        
        div(class="w-1/3")
            span Icons made by 
            a(href="https://www.freepik.com/" title="Freepik").text-blue-500 Freepik
            span  from  
            a(href="https://www.flaticon.com/" title="Flaticon").text-blue-500 www.flaticon.com
            span  is licensed by 
            a(href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank").text-blue-500 CC 3.0 BY
</template>
