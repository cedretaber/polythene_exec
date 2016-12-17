require 'sinatra'
require 'sinatra/reloader'
require 'sinatra/json'

get '/' do
  redirect to('index.html')
end

get '/books' do
  books = %w(
すごいHaskellたのしく学ぼう Haskellの入門書
すごいErlangゆかいに学ぼう Erlangの入門書
たのしいRuby Ruby入門書
型システム入門 型システムの入門書
プログラミング言語の基礎概念 プログラミング言語の入門書
TDPL D言語の入門書
  ).each_slice(2).map { |title, subtitle| { title: title, subtitle: subtitle} }
  json books
end
