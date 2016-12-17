import m from 'mithril';
import list from 'polythene/list/list';
import listTile from 'polythene/list-tile/list-tile';
import 'polythene/theme/theme';

function mkBook(book) {
    return m.component(listTile, {
        title: book.title,
        subtitle: book.subtitle
    })
}

function mkBookList(books) {
    return  m.component(list, {
        header: {
            title: '書籍一覧'
        },
        tiles: books.map(book => mkBook(book))
    });
}

const app = {
    vm: {
        books: m.prop([]),
        init: () => {
            m.request({ method: 'GET', url: '/books' }).then(app.vm.books);
        }
    },
    view: () => {
        return m('.layout.vertical.center', [
            m('.auto-vertical', [
                mkBookList(app.vm.books())
            ])
        ]);
    }
};

app.vm.init();

m.mount(document.body, app);
