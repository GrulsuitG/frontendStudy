# HTML

## header

문서의 메타 정보를 저장 하는 부분   

* &lt;meta charset="utf-8"&gt;
>문서 encoding 방식 지정 명시함으로써 혹시나 모르는 글자 깨짐에 대한 오류 방지      
    
* <title>name</title>    
> 문서 페이지의 이름을 지정     
> 북마크 시에도 default name으로 설정

* css
>     <link rel="stylesheet" href="style.css">
>방식으로 css 스타일 지정 가능

* etc
> 그 밖에 다른 페이지에서 링크되었을 때 표시되는 형식 등을 지정할 수 있다.
  
## body

html 의 내용이 들어가는 부분

* h1
> h1 태그는 body에서 한번만 쓰인다

* p
> paragraph 를 나타내는 태그, 한 문단을 표시

* a
>       <a href="link address" title="description"> link name </a>
> hyper link를 이용할 때 쓰는 태그    
> href : 참조하고 싶은 주소 title : 마우스를 올렷을 때 설명     
> 다음과 같이 나타난다.    
> <a href="link address" title="description"> link name </a>

* 강조
> em : <em>italic</em>   
> strong : <strong>bold</strong>

* table
> table tag를 이용
> tr 로 row 표시 td로 col 단위 표시
> thead, tbody, tfoot 태그를 이용해 위치 지정 가능     
> colgroup, rowgroup 태그를 통해 col별, row별 형식지정 가능    
> colsapn, rowspan, span 태그를 통해 범위 지정 가능
