<?PHP
 $file = './data.json';
 $contents = file_get_contents( $file );
 $json = json_decode( $contents, true );
?>
<script>
 let json = <?PHP echo json_encode( $json ) ?>;
 const top_header = document.querySelector('select[name="top_header"]');
 const sub_header = document.querySelector('select[name="sub_header"]');
 top_header.addEventListener('change', e => {
 Object.keys( json[ e.target.value ] ).forEach( key => {
 const option = document.createElement('option');
 option.value = key;
 option.innerText = key;
 sub_header.append( option );
 });
 });
</script>