import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Carousel from '../ui/Carousel';
import { ArrowRight, Users, BookOpen, Award, Database, Beaker, GraduationCap } from 'lucide-react';

// 导入图片
import carouselImage1 from '../../assets/carousel/carousel_1_lab.jpg';
import carouselImage2 from '../../assets/carousel/carousel_2_conference.jpg';
import carouselImage3 from '../../assets/carousel/carousel_3_students.jpg';
import carouselImage4 from '../../assets/carousel/carousel_4_data.jpg';

const Home = () => {
  const carouselSlides = [
    {
      image: carouselImage1,
      title: '先进实验设备',
      description: '配备国际先进的热质传递实验设备，为科研提供强有力支撑',
      link: '/research'
    },
    {
      image: carouselImage2,
      title: '学术交流合作',
      description: '积极开展国际学术交流，推动热能工程领域前沿发展',
      link: '/publications'
    },
    {
      image: carouselImage3,
      title: '人才培养',
      description: '培养具有创新精神和实践能力的热能工程专业人才',
      link: '/education'
    },
    {
      image: carouselImage4,
      title: '数据共享',
      description: '建立开放的科研数据平台，促进学术资源共享',
      link: '/downloads'
    }
  ];

  const features = [
    {
      icon: <Users className="w-8 h-8" />,
      title: '优秀团队',
      description: '汇聚国内外优秀学者，形成多层次人才梯队',
      link: '/team'
    },
    {
      icon: <Beaker className="w-8 h-8" />,
      title: '前沿研究',
      description: '聚焦热质传递与热系统关键技术问题',
      link: '/research'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: '丰硕成果',
      description: '在国际顶级期刊发表高水平学术论文',
      link: '/publications'
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: '人才培养',
      description: '培养博士、硕士研究生和本科生',
      link: '/education'
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: '科研项目',
      description: '承担国家重大科研项目和产业合作项目',
      link: '/projects'
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: '开放数据',
      description: '提供开源代码和科研数据下载服务',
      link: '/downloads'
    }
  ];

  const news = [
    {
      date: '2025-06-10',
      title: '课题组在Nature Energy发表重要研究成果',
      summary: '在高效热电转换材料设计方面取得重大突破...',
      link: '/publications'
    },
    {
      date: '2025-06-08',
      title: '国际热质传递学术会议成功举办',
      summary: '来自全球20多个国家的专家学者参与交流...',
      link: '/news'
    },
    {
      date: '2025-06-05',
      title: '新一批博士研究生顺利通过答辩',
      summary: '5名博士研究生成功完成学位论文答辩...',
      link: '/education'
    },
    {
      date: '2025-06-01',
      title: '课题组获得国家重点研发计划资助',
      summary: '新能源热管理系统关键技术研究项目正式启动...',
      link: '/projects'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-16"
    >
      {/* 轮播图部分 */}
      <section className="relative">
        <Carousel slides={carouselSlides} />
      </section>

      {/* 课题组简介 */}
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
              清华大学热质传递与热系统课题组
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              我们致力于热质传递与热系统领域的前沿研究，在传热传质理论、热系统优化设计、
              新能源热管理等方向取得了重要进展。课题组秉承"严谨治学、开拓创新"的理念，
              培养高水平科研人才，推动热能工程技术的发展。
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card-hover bg-white p-6 rounded-lg shadow-md"
              >
                <div className="text-purple-600 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <Link
                  to={feature.link}
                  className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium"
                >
                  了解更多
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 最新动态 */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              最新动态
            </h2>
            <p className="text-lg text-gray-600">
              了解课题组最新的研究进展和学术活动
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {news.map((item, index) => (
              <motion.article
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card-hover bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-600"
              >
                <div className="text-sm text-gray-500 mb-2">{item.date}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4">{item.summary}</p>
                <Link
                  to={item.link}
                  className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium"
                >
                  阅读全文
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </motion.article>
            ))}
          </div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Link
              to="/news"
              className="inline-flex items-center bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              查看更多动态
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 统计数据 */}
      <section className="py-16 gradient-bg text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              课题组成就
            </h2>
            <p className="text-lg opacity-90">
              用数据展示我们的科研实力和影响力
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '50+', label: '发表论文' },
              { number: '15+', label: '科研项目' },
              { number: '30+', label: '团队成员' },
              { number: '100+', label: '培养学生' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  {stat.number}
                </div>
                <div className="text-lg opacity-90">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;

