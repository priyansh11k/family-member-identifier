Webcam.set({
    width : 350,
    height : 300,
    image_format : "png",
    png_quality : 90
    });
    
    camera = document.getElementById("camera");
    
    Webcam.attach(camera);
    
    function take_snapshot(){
    Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'">';
    });
    }
    
    console.log('ml5 version is ', ml5.version);
    classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/IleNyLoVo/model.json',model_loaded);

    function model_loaded(){
        console.log("model is loaded");
        }
        
        function check(){
            img = document.getElementById("captured_image");
            classifier.classify(img,got_Result);
        }
        
        function got_Result(error,results){
        if (error){
        console.error(error);
        }
        else{
        console.log(results);
        document.getElementById("obj_name").innerHTML = results[0].label;
        document.getElementById("obj_acc").innerHTML = results[0].confidence.toFixed(2);
        }
        }
        
        



    
    