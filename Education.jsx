import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Users, Calendar, Award, ExternalLink, Clock, MapPin } from 'lucide-react';

const Education = () => {
  const [activeTab, setActiveTab] = useState('undergraduate');

  const tabs = [
    { id: 'undergraduate', name: '本科生课程', icon: <BookOpen className="w-5 h-5" /> },
    { id: 'graduate', name: '研究生课程', icon: <BookOpen className="w-5 h-5" /> },
    { id: 'activities', name: '学生活动', icon: <Users className="w-5 h-5" /> }
  ];

  const courses = {
    undergraduate: [
      {
        code: 'ME2101',
        name: '工程热力学',
        credits: 3,
        semester: '春季学期',
        instructor: '张教授',
        description: '介绍热力学基本概念、定律和循环，培养学生分析热力过程的能力。',
        objectives: [
          '掌握热力学基本概念和定律',
          '理解各种热力循环的工作原理',
          '具备分析实际热力过程的能力'
        ],
        prerequisites: ['高等数学', '大学物理'],
        textbook: '《工程热力学》（第五版），沈维道等编著'
      },
      {
        code: 'ME2102',
        name: '传热学',
        credits: 3,
        semester: '秋季学期',
        instructor: '李教授',
        description: '系统学习导热、对流和辐射三种传热方式的基本理论和计算方法。',
        objectives: [
          '掌握三种传热方式的基本理论',
          '学会传热问题的分析和计算方法',
          '了解传热强化和传热控制技术'
        ],
        prerequisites: ['工程热力学', '流体力学'],
        textbook: '《传热学》（第四版），杨世铭等编著'
      },
      {
        code: 'ME3201',
        name: '热系统设计',
        credits: 2,
        semester: '春季学期',
        instructor: '王副教授',
        description: '综合运用传热传质理论，进行热系统的设计和优化。',
        objectives: [
          '掌握热系统设计的基本方法',
          '学会使用专业软件进行热系统分析',
          '培养工程设计和创新能力'
        ],
        prerequisites: ['传热学', '工程热力学'],
        textbook: '《热系统设计》，自编教材'
      }
    ],
    graduate: [
      {
        code: 'ME6101',
        name: '高等传热学',
        credits: 3,
        semester: '秋季学期',
        instructor: '张教授',
        description: '深入学习传热学的高级理论，包括微尺度传热、多相流传热等前沿内容。',
        objectives: [
          '掌握传热学的高级理论和方法',
          '了解传热学研究的前沿进展',
          '具备独立进行传热研究的能力'
        ],
        prerequisites: ['传热学', '数学物理方法'],
        textbook: '《Advanced Heat Transfer》, A. Bejan'
      },
      {
        code: 'ME6102',
        name: '计算传热学',
        credits: 3,
        semester: '春季学期',
        instructor: '李教授',
        description: '学习传热问题的数值求解方法，掌握CFD软件的使用。',
        objectives: [
          '掌握传热问题的数值求解方法',
          '学会使用CFD软件进行传热分析',
          '培养数值模拟和计算能力'
        ],
        prerequisites: ['高等传热学', '数值分析'],
        textbook: '《Computational Heat Transfer》, Y. Jaluria'
      },
      {
        code: 'ME7101',
        name: '传热传质前沿',
        credits: 2,
        semester: '春季学期',
        instructor: '多位教授',
        description: '介绍传热传质领域的最新研究进展和发展趋势。',
        objectives: [
          '了解传热传质领域的前沿研究',
          '培养科研思维和创新能力',
          '提高学术交流和表达能力'
        ],
        prerequisites: ['高等传热学'],
        textbook: '最新文献和综述'
      }
    ]
  };

  const activities = [
    {
      title: '热能工程学术论坛',
      type: '学术活动',
      date: '2025年5月',
      description: '邀请国内外知名专家学者进行学术报告，促进学术交流。',
      participants: '全体研究生',
      frequency: '每月一次',
      achievements: [
        '提升学生学术视野',
        '促进学术交流合作',
        '培养学术表达能力'
      ]
    },
    {
      title: '传热实验技能竞赛',
      type: '技能竞赛',
      date: '2025年4月',
      description: '通过实验设计和操作竞赛，提高学生的实验技能和创新能力。',
      participants: '本科生、研究生',
      frequency: '每年一次',
      achievements: [
        '提高实验技能',
        '培养创新思维',
        '增强团队合作'
      ]
    },
    {
      title: '工业实习项目',
      type: '实践活动',
      date: '暑期',
      description: '组织学生到相关企业进行实习，了解工业传热应用。',
      participants: '本科生、研究生',
      frequency: '每年暑期',
      achievements: [
        '了解工业应用',
        '提升实践能力',
        '拓展就业渠道'
      ]
    },
    {
      title: '国际学术会议参与',
      type: '国际交流',
      date: '全年',
      description: '支持优秀学生参加国际学术会议，展示研究成果。',
      participants: '优秀研究生',
      frequency: '根据会议安排',
      achievements: [
        '国际学术交流',
        '提升英语能力',
        '扩大学术影响'
      ]
    }
  ];

  const renderCourseCard = (course) => {
    return (
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="card-hover bg-white p-6 rounded-lg shadow-md"
      >
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-1">
              {course.name}
            </h3>
            <p className="text-purple-600 font-medium">{course.code}</p>
          </div>
          <div className="text-right text-sm text-gray-600">
            <p>{course.credits} 学分</p>
            <p>{course.semester}</p>
          </div>
        </div>

        <p className="text-gray-600 mb-4">{course.description}</p>

        <div className="space-y-4">
          <div>
            <h4 className="font-medium text-gray-900 mb-2">授课教师</h4>
            <p className="text-gray-600">{course.instructor}</p>
          </div>

          <div>
            <h4 className="font-medium text-gray-900 mb-2">课程目标</h4>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              {course.objectives.map((objective, index) => (
                <li key={index}>{objective}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-gray-900 mb-2">先修课程</h4>
            <div className="flex flex-wrap gap-2">
              {course.prerequisites.map((prereq, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                >
                  {prereq}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-medium text-gray-900 mb-2">教材</h4>
            <p className="text-gray-600 text-sm">{course.textbook}</p>
          </div>
        </div>
      </motion.div>
    );
  };

  const renderActivityCard = (activity, index) => {
    return (
      <motion.div
        key={index}
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        className="card-hover bg-white p-6 rounded-lg shadow-md"
      >
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-1">
              {activity.title}
            </h3>
            <span className="inline-block px-3 py-1 bg-purple-100 text-purple-700 text-sm rounded-full">
              {activity.type}
            </span>
          </div>
          <div className="text-right text-sm text-gray-600">
            <div className="flex items-center space-x-1">
              <Calendar className="w-4 h-4" />
              <span>{activity.date}</span>
            </div>
          </div>
        </div>

        <p className="text-gray-600 mb-4">{activity.description}</p>

        <div className="space-y-3">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Users className="w-4 h-4" />
            <span><strong>参与对象：</strong>{activity.participants}</span>
          </div>
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Clock className="w-4 h-4" />
            <span><strong>举办频率：</strong>{activity.frequency}</span>
          </div>
        </div>

        <div className="mt-4">
          <h4 className="font-medium text-gray-900 mb-2">活动成效</h4>
          <ul className="list-disc list-inside text-gray-600 space-y-1">
            {activity.achievements.map((achievement, index) => (
              <li key={index}>{achievement}</li>
            ))}
          </ul>
        </div>
      </motion.div>
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-16"
    >
      {/* 页面标题 */}
      <section className="py-16 gradient-bg text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            人才培养
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl opacity-90"
          >
            培养具有创新精神和实践能力的热能工程专业人才
          </motion.p>
        </div>
      </section>

      {/* 培养理念 */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              培养理念
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              我们秉承"厚基础、宽口径、重实践、求创新"的人才培养理念，
              注重理论与实践相结合，培养学生的科学思维和工程实践能力，
              为国家热能工程领域输送高素质人才。
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <BookOpen className="w-8 h-8" />,
                title: '厚基础',
                description: '扎实的数理基础和专业理论基础'
              },
              {
                icon: <ExternalLink className="w-8 h-8" />,
                title: '宽口径',
                description: '广泛的知识面和跨学科视野'
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: '重实践',
                description: '强化实验技能和工程实践能力'
              },
              {
                icon: <Award className="w-8 h-8" />,
                title: '求创新',
                description: '培养创新思维和科研能力'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-purple-600 mb-4 flex justify-center">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 课程与活动内容 */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* 标签导航 */}
          <div className="flex flex-wrap justify-center mb-12 border-b border-gray-200">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-6 py-3 font-medium transition-colors ${
                  activeTab === tab.id
                    ? 'text-purple-600 border-b-2 border-purple-600'
                    : 'text-gray-600 hover:text-purple-600'
                }`}
              >
                {tab.icon}
                <span>{tab.name}</span>
              </button>
            ))}
          </div>

          {/* 课程展示 */}
          {(activeTab === 'undergraduate' || activeTab === 'graduate') && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {courses[activeTab]?.map((course, index) => (
                <div key={index}>
                  {renderCourseCard(course)}
                </div>
              ))}
            </div>
          )}

          {/* 学生活动展示 */}
          {activeTab === 'activities' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {activities.map((activity, index) => renderActivityCard(activity, index))}
            </div>
          )}
        </div>
      </section>

      {/* 培养成果 */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              培养成果
            </h2>
            <p className="text-lg text-gray-600">
              我们的毕业生在学术界和工业界都取得了优异的成绩
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '100+', label: '培养学生总数' },
              { number: '30+', label: '博士毕业生' },
              { number: '70+', label: '硕士毕业生' },
              { number: '95%', label: '就业率' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Education;

