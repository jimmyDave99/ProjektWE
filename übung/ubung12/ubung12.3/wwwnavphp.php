<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <script src="../../../js/dom.js" defer></script>
    <title>Document</title>
</head>
<style>
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    header{
        background-color: #c24f4f;
        height: 100px;
        color: white;
    }
    h1{
        text-align: center;
    }
    .content{
        display: grid;
        grid-template-columns: 20% 60% 20%;
        padding: 0;
        margin: 0;
        height: 600px;
    }
    .menu{
        background-color: #c28283;
        grid-column-start: 1;
        grid-column-end: 2;
        grid-row-start: 1;
        grid-row-end: 2;
        padding: 0;
        margin: 0;
    }
    .collapsible{
        text-align: center;
        width: 200px;
        height: 30px;
        display: grid;
        padding-top: 5px;

    }
    .collapcontent{
        display: none;
    }
    .docu{
        background-color: #95d2f4;
        grid-column-start: 2;
        grid-column-end: 3;
        grid-row-start: 1;
        grid-row-end: 2;
    }
    .ref{
        background-color: #c28283;
        grid-column-start: 3;
        grid-column-end: 4;
        grid-row-start: 1;
        grid-row-end: 2;
        color: white;
    }
    .footer{
        background-color: black;
        height: 50px;
        width: 100%;
    }
    .pfooter{
        text-align: center;
        color: white;

    }
    .ft{
        font-size: 20px;
    }
    textarea { margin: 1rem; display: block; width: 90%; height: 20vh; }
    input { margin: 1rem; }
</style>
<body>
<header>
    <h1> WWW-Navigator</h1>
</header>
<nav class="content">
    <div class="menu">
        <button type="button" class="collapsible">Edit</button>
        <div class="collapcontent">
            <div id="edit">
                <h1>Fill with contents</h1>
                <form method="post">
                    <fieldset>
                        <legend>Select content area and add a new text:</legend>
                        <select name="top_header">
                            <option value="html">HTML</option>
                            <option value="css">CSS</option>
                            <option value="javascript">JavaScript</option>
                        </select>
                        <select name="sub_header">
                        </select>
                        <select name="sub_header2">
                            <option value="html">Content</option>
                            <option value="css">References</option>
                        </select>
                        <textarea name="content"></textarea>
                        <input type="submit" value="Submit">
                    </fieldset>
                </form>
            </div>
        </div>
<!--        <button id="btedit">Edit</button>-->



    </div>
    <div class="docu">
        <button type="button" class="collapsible">HTML</button>
        <div class="collapcontent">
            <h2>html</h2>
            <h3>headings</h3>
            <p>
                <span id="Htmlcontent"> </span>
            </p>
            <h3>Paragraph</h3>
            <p>
                <span id="parcontent"> </span>
            </p>
        </div>
        <button type="button" class="collapsible">CSS</button>
        <div class="collapcontent">
            <h2>css</h2>
            <h3>selectors</h3>
            <p>
                <span id="seleccontent"> </span>
            </p>
            <h3>colors</h3>
            <p>
                <span id="colorcontent"> </span>
            </p>
        </div>

        <button type="button" class="collapsible">JavaScript</button>
        <div class="collapcontent">
            <h2>Javascript</h2>
            <h3>function</h3>
            <p>
                <span id="funccontent"> </span>
            </p>
            <h3>object</h3>
            <p>
                <span id="objectcontent"> </span>
            </p>
        </div>


    </div>

    <div class="ref">
        <p>
            <span id="Html_ref"> </span>
        </p>
        <p>
            <span id="pararef"> </span>
        </p>
        <p>
            <span id="selecref"> </span>
        </p>
        <p>
            <span id="colorref"> </span>
        </p>
        <p>
            <span id="funcref"> </span>
        </p>
        <p>
            <span id="objectref"> </span>
        </p>
    </div>
</nav>
<footer class="footer">
    <p class="pfooter"><span class="ft">Footer:</span> Sitemap Home News Contact About</p>
</footer>
</body>
<?PHP
$file = './data.json';
$contents = file_get_contents( $file );
$json = json_decode( $contents, true );

if ( isset($_POST[ 'top_header' ]) && isset($_POST[ 'sub_header' ]) && isset($_POST[ 'content' ]) ){
    $top_header = $_POST[ 'top_header' ];
    $sub_header = $_POST[ 'sub_header' ];
//    $sub_header2 = $_POST[ 'sub_header2' ];
    $content = $_POST[ 'content' ];
    $json[ $top_header ][ $sub_header ][ 'content' ] = $content;
    if ( file_put_contents( $file, json_encode( $json, true )) ){
        echo "<script>alert('Content is entered successfully!')</script>";
    }
}else{
    $top_header = $_POST[ 'top_header' ];
    $sub_header = $_POST[ 'sub_header' ];
//    $sub_header2 = $_POST[ 'sub_header2' ];
    $content = $_POST[ 'content' ];
    $json[ $top_header ][ $sub_header ][ 'references' ] = $content;
    if ( file_put_contents( $file, json_encode( $json, true )) ){
        echo "<script>alert('Content is entered successfully!')</script>";
    }
}
?>

<script>
    let json = <?PHP echo json_encode( $json )?>;
    const top_header = document.querySelector('select[name="top_header"]');
    const sub_header = document.querySelector('select[name="sub_header"]');
    const sub_header2 = document.querySelector('select[name="sub_header2"]');
    top_header.addEventListener('change', e => {
        Object.keys( json[ e.target.value ] ).forEach( key => {
            const option = document.createElement('option');
            option.value = key;
            option.innerText = key;
            sub_header.append( option );
        });
    });

    const url = 'data.json';
    async  function getData(){
        const response = await fetch(url);
        const data = await response.json();

        document.getElementById('Htmlcontent').textContent=data['html']['headings']['h1'];
        document.getElementById('parcontent').textContent=data['css']['selectors'];

    }
    getData();

</script>
</html>

