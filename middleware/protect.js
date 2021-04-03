export default function ({ app, redirect }) {
    console.log('contenido protegido')
    const auth = app.$cookies.get('auth')
    if (!auth) return redirect('/')
}