<hr>
<form action="{{route('accept.info')}}" method="post">
    {{csrf_field()}}
    <img src="{{$user->avatar}}" alt="">
    <p>{{$user->id}}</p>
    <p>https://vk.com/{{$user->nickname}}</p>
    <p>{{$user->name}}</p>

    <input type="hidden" name="id" value="{{$user->id}}">
    <input type="hidden" name="avatar" value="{{$user->avatar}}">


    <input type="hidden" name="name" value="{{$user->name}}">
    @if ($flag=="vk")
        @if (isset($user->accessTokenResponseBody["email"]))
            <p>{{$user->accessTokenResponseBody["email"]}}</p>
            <input type="hidden" name="email" value="{{$user->accessTokenResponseBody["email"]}}">
        @else
            <input type="email" name="email" placeholder="email">
        @endif

        <input type="hidden" name="vk" value="https://vk.com/{{$user->nickname}}">
    @endif

    @if ($flag=="fb")
        @if (isset($user->email))
            <p>{{$user->email}}</p>
            <input type="hidden" name="email" value="{{$user->email}}">
        @else
            <input type="email" name="email" placeholder="email">
        @endif

        <input type="hidden" name="fb" value="{{$user->id}}">
    @endif


    <input type="password" name="password" placeholder="password">

    <button type="submit">отправить</button>
</form>