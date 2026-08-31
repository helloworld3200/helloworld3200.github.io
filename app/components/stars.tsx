/* 
 this idea has been scrapped but im keeping it here for posterity and in case i want to use it later

 Shooting stars background effect i found on some random streaming website that im copying
 general idea:
 trail element + star element duplicated many times
 raw src code:

shadow not needed?
here it is just in case we do:  shadow-[0_0_0_1px_#ffffff10]
inner star tailwind class:
animate-meteor pointer-events-none absolute rounded-full bg-slate-500
outer trail tailwind class:
pointer-events-none absolute top-1/2 -z-10 h-px w-[50px] -translate-y-1/2 bg-gradient-to-r from-slate-500 via-blue-600/30 to-transparent
animate-meteor keyframes animation:
0% {
    transform: rotate(215deg) translate(0);
    opacity: 1
}

70% {
    opacity: 1
}

100% {
    transform: rotate(215deg) translate(-500px);
    opacity: 0
}
*/