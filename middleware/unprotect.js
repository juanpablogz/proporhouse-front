export default function ({ app, redirect }) {
    const auth = app.$cookies.get('auth')
    if (!auth) {
        console.log('contenido de libre acceso')
    }
    if (auth) return redirect('/auth')
}