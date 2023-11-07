import { useStore } from "@/useStore/store";
import React, { useState } from "react";

const arraySkills = [
  {
    name: "React",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1150px-React-icon.svg.png",
    value: false,
  },
  {
    name: "Node.js",
    imageUrl:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRx4zAJGpThQNtuU028R37iIMFvJzLiwu9iyuxz8PRrb_FgPAQO",
    value: false,
  },
  {
    name: "Python",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgsIz7tbcCJ8Uxgb6NBSa3etUfrToZGmHzwI9anTFFAoK4zvZc",
    value: false,
  },
  {
    name: "Swift",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu0KzOMtN96bWUn35VP8k8U5024JcBKMqYAbZFyd-TxicABdcT",
    value: false,
  },
  {
    name: "Android",
    imageUrl:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSMmEipz7I0wnnY5ABvnRtOct3i-vIOnG5-HzeC1DSp0JzZvhQ4",
    value: false,
  },
  {
    name: "Go",
    imageUrl:
      "https://t3.gstatic.com/images?q=tbn:ANd9GcTJSPtnaRdSq7kQnYPWkDYutMLgjahxrpLpx8-SPaUp79qCeMok",
    value: false,
  },
  {
    name: "Devops",
    imageUrl:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQh3g35Tc5KRQMaZMVA3y7zbuSL2wdNls4ZmGQNLXMJ_NZjv3cU",
    value: false,
  },
  {
    name: "Machine Learning",
    imageUrl:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcScF-fKCOuRBQKJ694tXDs6DripQTl5HgpFNzLPF_TlhafJieI4",
    value: false,
  },
  {
    name: "Data Engineer",
    imageUrl:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQj9aBjBKHCpM7NjV9JlFDudx1Uj9QVmODSWsoVfJUgQoJ70Ziz",
    value: false,
  },
  {
    name: "Typescript",
    imageUrl:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR5a_H-yhkguAvnFqCG8VSD0HGNTGa5y9vSWKttXUJhubx9bRVp",
    value: false,
  },
  {
    name: "Scala",
    imageUrl:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSvSuu4NWUNlhNO56uFBPHmTeDWlB6K1Fsbu-Hgar7vsCLYFroO",
    value: false,
  },
  {
    name: "TensorFlow",
    imageUrl:
      "https://seeklogo.com/images/T/tensorflow-logo-02FCED4F98-seeklogo.com.png",
    value: false,
  },
  {
    name: "Analytical Skills",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX3NC2RPeUD0mVarovTApcoeBRyN8uW0axPw&usqp=CAU",
    value: false,
  },
  {
    name: "Data Visualization",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_Jte6HnlS8ItU6gxZe66MW548hokFLC93i3LQr2kBa5KgqszVsQH_rNZqvyfijcmR6IE&usqp=CAU",
    value: false,
  },
  {
    name: "Data Warehousing",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT117AUCg1DgahGSw0kOR5EZZNFBCX0uD5FWTIvuNC6JWfgMhC4Z79QTeGbd4ksgzN8W0w&usqp=CAU",
    value: false,
  },
  {
    name: "C++",
    imageUrl:
      "https://www.freeiconspng.com/thumbs/c-logo-icon/c--logo-icon-0.png",
    value: false,
  },
  {
    name: "Deep Learning",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ-AjDbpzq6VVAQrpKj7qk1C3hS3-o4kk4xg&usqp=CAU",
    value: false,
  },
];

const Skills = () => {
  const [mainSkills, updateMainSkills] = useStore((store) => [
    store.mainSkills,
    store.updateMainSkills,
  ]);
  const [skills, setSkills] = useState(arraySkills);

  const changeValue = (name) => {
    const array = skills.map((item) => {
      if (item.name == name) {
        item.value = !item.value;
        return item;
      } else if (item.value == true) {
        return item;
      } else return item;
    });
    setSkills(array);
    const temp = array.filter((item) => {
      if (item.value) return item;
    });

    updateMainSkills(temp.map((item) => item.name))
  };

  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-6 gap-x-3 gap-y-5">
        {skills.map((item) => {
          return (
            <div
              className={`border hover:shadow-lg duration-300 transition-shadow  ${
                item.value == true ? "border-blue-500 border-2" : "border-gray-300"
              } rounded-md shadow cursor-pointer flex flex-col  items-center py-4 space-y-2`}
              onClick={() => {
                changeValue(item.name);
              }}
            >
              <picture>
                <img src={item.imageUrl} className="w-8" alt="" />
              </picture>
              <p className="text-xs text-gray-500 ">{item.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
