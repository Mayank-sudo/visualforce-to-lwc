public with sharing class BeforeRenderHookController {
    public List<String> courses { get; private set; }

    public  void populateCourses() {
       courses = new List<String>{
         'FOOD Cropation',
         'Fruit',
        'Mango'
       }
    };


    }
}
